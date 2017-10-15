import React from 'react';
import AddOption from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options){
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  };

  clearSelectedOption = () => {
    this.setState (() => {
      return {
        selectedOption: undefined
      };
    });
  };

  componentDidUpdate = (prevProps, prevState)  => {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  };
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handleDeleteOption = (optionToRemove) =>
  {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) =>
        optionToRemove !== option
      )}));
  };
  handlePick = () => {
    var index = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[index];
    this.setState (() => {
      return {
        selectedOption: option
      };
    });
  };

  handleAddOption = (option) =>{
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1)
    {
      return 'This option already exists';
    }
    else
    {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  };
  render () {
    const subtitle = 'Put your life at the hands of a computer.';
    return (
      <div>
        <div className = "container">
          <Header subtitle={subtitle}/>
          <Action
            hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick}
          />
          <div className = "widget">
            <Options
              options = {this.state.options}
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption
              handleAddOption = {this.handleAddOption}
            />
        </div>
        </div>
        <OptionModal
          selectedOption = {this.state.selectedOption}
          clearSelectedOption = {this.clearSelectedOption}
        />
      </div>
    );
  }
}

export {IndecisionApp as default}

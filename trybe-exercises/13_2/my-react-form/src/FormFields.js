import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend >Personal Data</legend>
            <input size={100} placeholder="First name" name="fname" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

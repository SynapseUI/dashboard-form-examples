import React from 'react';
import { BasicForm, Button, BasicFormModal } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as dataForBasicForm from './basicForm/dataForBasicForm';

// initialState
// formData
// handleSubmit
// handleValidation
// handleHidden
// handleCancel

class ExampleBasicForms extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  render() {
    return (
      <div>
        <BasicForm {...dataForBasicForm} />

        <Button onClick={() => this.setState({ isOpen: true })}>open modal</Button>

        <BasicFormModal
          headerText="Basic Form Modal"
          width="500px"
          isOpen={this.state.isOpen}
          closeModal={() => this.setState({ isOpen: false })}
          {...dataForBasicForm}
        />
      </div>
    );
  }
}

export default ExampleBasicForms;

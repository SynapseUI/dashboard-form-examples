import { Component } from 'react';

class RenderPropForIsLoading extends Component {
  state = {
    isLoading: false,
  };

  toggleIsLoading = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  render() {
    const { isLoading } = this.state;
    const { children } = this.props;

    return children({
      isLoading,
      toggleIsLoading: this.toggleIsLoading,
    });
  }
}

export default RenderPropForIsLoading;

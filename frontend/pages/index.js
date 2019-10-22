import ProjectList from "../components/ProjectList";
import React from "react";


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    document.getElementsByTagName("body")[0].className = "";
    let aboutLink = document.getElementsByClassName("header-link-about")[0];
    if (aboutLink.classList.contains('is-active')) {
     this.classList.remove('is-active');
    }
  }

  render() {
    return (
      <main>
        <ProjectList />
      </main>
    );
  }
}

export default Index;
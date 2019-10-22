import gql from "graphql-tag";
import { withRouter } from "next/router";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { Converter } from "showdown";
import Logo from "../components/Logo";

class Project extends React.Component {
  constructor (props) {
    super(props);

    this.converter = new Converter();
  }

  componentDidMount = () => {
  }

  render() {
    const { data } = this.props;
    
    if (data.project) {
      return (
        <div className="">
          {data.project.name}
          <div className="" dangerouslySetInnerHTML={{
            __html: this.converter.makeHtml(data.project.description)
          }}></div>
        </div>
      );
    }
    return (
      <div className="about-container flex-center-children">
        <Logo/>
      </div>
    );
    
  }
};

const GET_PROJECTS = gql`
  query($id: ID!) {
    project (id: $id) {
      name
      date
      description
      media_desktop
      media_mobile
      dark_image
      slug
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (Project)
export default compose(
  withRouter,
  graphql(GET_PROJECTS, {
    options: props => {
      return {
        variables: {
          id: props.router.query.id
        }
      };
    },
    props: ({ data }) => ({ data })
  })
)(Project);
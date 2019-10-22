import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import TweenMax from "gsap/umd/TweenMax";
import Logo from "../Logo";

const SLIDE_TO_SHOW = 6;
const HEIGHT = 80;
const DURATION = 10;
const tl = new TimelineMax({
  repeat: -1,
});


class ProjectList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidUpdate() {
    const { data } = this.props;
    const { content } = this.refs;
    if (data.projects && data.projects.length) {
      tl.add(TweenLite.to(content, DURATION, {
        transform: `translate3d(0, ${data.projects.length * HEIGHT * -1}px, 0)`, 
        ease: Linear.easeNone, 
      }));
      tl.add(TweenLite.to(content, 0, { 
        transform: `translate3d(0, 0, 0)`
      }));
    }
  }

  render() {
    const { data } = this.props;
    
    if (data.projects && data.projects.length) {
      return (
        <div className="projects-wrapper" style={{ height: `${SLIDE_TO_SHOW * HEIGHT}px`}}>
          <ul className="projects-list" 
            style={{ height: `${(data.projects.length + SLIDE_TO_SHOW) * HEIGHT}px`}}
            ref="content"
            onMouseEnter={() => {
              tl.pause();
            }}
            onMouseLeave={() => {
              tl.play();
            }}>
            {data.projects.map((project, index) => (
              <li
                key={index+1}
              >
                <Link 
                  href={`/projects/${project.id}`}
                  as={`/projects/${project.id}`}
                  >
                  <a className="project">
                    {project.name}
                  </a>
                </Link>
              </li>
            ))}

            {data.projects.map((project, index) => {
              if (index + 1 <= SLIDE_TO_SHOW) {
                return (
                  <li
                    key={`last-${index + 1}`}
                  >
                    <Link 
                      href={`/projects/${project.id}`}
                      as={`/projects/${project.id}`}
                      >
                      <a className="project">
                        {project.name}
                      </a>
                    </Link>
                  </li>
                ); 
              }
              return null;
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className="projects-wrapper">
        <Logo/>
      </div>
    );
  }
};

const query = gql`
  {
    projects {
      id
      slug
      name
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ProjectList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(ProjectList);
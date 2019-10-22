import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import { Converter } from "showdown";
import Logo from "../components/Logo";
import Download from "../components/Icons/download";

class AboutPage extends React.Component {
  constructor (props) {
    super(props);

    this.converter = new Converter();
  }

  componentDidMount = () => {
    document.getElementsByTagName("body")[0].className = "about";
    document.getElementsByClassName("header-link-about")[0].classList.add('is-active');
  }

  render() {
    const { data } = this.props;
    
    if (data.single) {
      return (
        <div className="about-container">
          <div className="about-content" dangerouslySetInnerHTML={{
            __html: this.converter.makeHtml(data.single.content)
          }}></div>

          <div className="about-bonus">Bonus</div>
          <div className="about-bonus-items">{data.single.bonus}</div>

          <div className="about-footer">
            <div className="about-footer-credits">
              <div>
                <div className="about-footer-label">Design</div>
                <div className="about-footer-item">Denis Lefèvre</div>
              </div>
            </div>
            <div>
              <a className="about-resume-link" href="#" download target="_blank">
                My Resume
                <Download/> 
              </a>
            </div>
          </div>
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

const query = gql`
  {
    single (id:1) {
      slug
      name
      content
      bonus
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (AboutPage)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(AboutPage);
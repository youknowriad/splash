import {Component} from "@wordpress/element";
import {IconButton} from "@wordpress/components";
import {__} from "@wordpress/i18n";

import "./style.scss";
import Jif from "../jif";
import {getJifs, searchJifs} from "../../api";

// TODO: use data.pagination
class JifList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      jifs: [],
      query: ""
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    getJifs().then(jifs => {

      this.setState({"jifs": jifs.data});
    });
  }

  updateQuery(event) {
    this.setState({query: event.target.value});
  }

  search(event) {
    event.preventDefault();
    searchJifs(this.state.query).then(data => {
      this.setState({jifs: data.data});
    });
  }

  render() {
    const {jifs, query} = this.state;

    if (!jifs || !jifs.length) {
      return (
       <strong
        className="dropit-giphy-sidebar-jif-error-red">{__("Cannot connect to Giphy API", "dropit")}</strong>
      );
    }

    return (
     <div>
       <form
        className="dropit-giphy-sidebar-jif-list__search-form"
        onSubmit={this.search}
       >
         <input
          type="text"
          value={query}
          onChange={this.updateQuery}
          placeholder={__("Search…", "dropit")}
         />
         <IconButton className="button" type="submit" icon="search"/>
       </form>
       {jifs.map(jif => <Jif key={jif.id} jif={jif}/>)}
     </div>
    );
  }
}

export default JifList;

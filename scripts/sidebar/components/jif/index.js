import { Component } from "@wordpress/element";
import { IconButton, Spinner } from "@wordpress/components";
import { createBlock } from "@wordpress/blocks";
import { withDispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";

import "./style.scss";

class JifList extends Component {
  constructor() {
    super(...arguments);
    this.addJif = this.addJif.bind(this);
    this.state = {
      loading: false
    };
  }

  addJif() {
    const { jif } = this.props;
    const block = createBlock("core/image", {
      url: jif.images.original.url,
      width:jif.images.original.width,
      height:jif.images.original.height,
      alt: jif.title
    });
    this.props.insertBlock(block);
  }

  render() {
    const { jif } = this.props;
    const { loading } = this.state;
    return (
      <div key={jif.id} className="dropit-giphy-sidebar-jif">
        {loading && (
          <div className="dropit-giphy-sidebar-jif__spinner-container">
            <Spinner />
          </div>
        )}
        <img src={jif.images.original.url} width={jif.images.original.width} height={jif.images.original.height} alt={jif.title}/>
        {!loading && (
          <div className="dropit-giphy-sidebar-jif__toolbar">
            <IconButton
              isPrimary
              icon="plus"
              onClick={this.addJif}
              label={__("Add Jif", "dropit-giphy")}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withDispatch(dispatch => ({
  insertBlock: dispatch("core/editor").insertBlock
}))(JifList);

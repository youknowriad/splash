import { PluginSidebar } from "@wordpress/editPost";

import JifList from "../../jif-list";
import Icon from "../../icon/giphy";

const Sidebar = () => (
 <PluginSidebar
  icon={<Icon borderless />}
  name="dropit-giphy-sidebar"
  title="Powered By GIPHY"
 >
   <JifList />
 </PluginSidebar>
);

export default Sidebar;

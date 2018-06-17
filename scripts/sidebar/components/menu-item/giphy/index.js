import { PluginSidebarMoreMenuItem } from "@wordpress/editPost";
import { __ } from "@wordpress/i18n";

import Icon from "../../icon/giphy";

const MenuItem = () => (
 <PluginSidebarMoreMenuItem icon={<Icon borderless />} target="dropit-giphy-sidebar">
   {__("Jifs from Giphy.com", "dropit")}
 </PluginSidebarMoreMenuItem>
);

export default MenuItem;

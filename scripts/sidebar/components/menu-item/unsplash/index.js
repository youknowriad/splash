import { PluginSidebarMoreMenuItem } from "@wordpress/editPost";
import { __ } from "@wordpress/i18n";

import Icon from "../../icon/unsplash";

const MenuItem = () => (
  <PluginSidebarMoreMenuItem icon={<Icon borderless />} target="dropit-sidebar">
    {__("Photos from Unsplash.com", "dropit")}
  </PluginSidebarMoreMenuItem>
);

export default MenuItem;

import React, {Fragment} from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";
import { menuConfig } from "./sidebarConfig";

const SidebarContent = props => {
  const { onClick } = props;

  const hideSidebar = () => {
    onClick();
  };

  const renderSidebarLink = menu => (
    <SidebarLink
      key={menu.title}
      title={menu.title}
      icon={menu.icon}
      route={menu.path}
      onClick={hideSidebar}
    />
  );

  const renderSideBarCategory = menu => (
    <SidebarCategory title={menu.title} icon={menu.icon}>
      {menu.menus.map(submenu => renderSidebarLink(submenu))}
    </SidebarCategory>
  );

  return (
    <div className="sidebar__content">
      {menuConfig.menus.map((menu, index) => (
        <Fragment key={index}>
          {menu.categoryBlock ? (
            <ul className="sidebar__block">
              {menu.category
                ? renderSideBarCategory(menu)
                : renderSidebarLink(menu)}
            </ul>
          ) : (
            <Fragment>
              {menu.category
                ? renderSideBarCategory(menu)
                : renderSidebarLink(menu)}
            </Fragment>
          )}
        </Fragment>
      ))}
    </div>
  );
};

SidebarContent.propTypes = {
  onClick: PropTypes.func.isRequired
};

SidebarLink.defaultProps = {
  isNew: false
};

export default SidebarContent;

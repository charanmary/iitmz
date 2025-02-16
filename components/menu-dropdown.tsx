import styles from "./menu-dropdown.module.scss";
import MenuItem, { MenuItemType } from "./menu-item";

type MenuDropdownProps = {
  submenus: MenuItemType[];
  show: boolean;
  depthLevel: number;
};

export default function MenuDropdown({
  submenus,
  show,
  depthLevel,
}: MenuDropdownProps) {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={`${styles.menu_dropdown} ${show && styles.show} ${
        depthLevel > 1 && styles.nested
      }`}
    >
      {submenus.map((submenu) => (
        <MenuItem item={submenu} key={submenu.link} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}

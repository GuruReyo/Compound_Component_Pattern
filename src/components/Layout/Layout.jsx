import Products from "./products/Products";
// import { RegularList } from "./RegularList";
import Modal from "./Modal/Modal";
import LargeProductListItem from './products/LargeProductListItem'
function Layout() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={Products[0]} />
      </Modal>
    </>
  );
}

export default Layout
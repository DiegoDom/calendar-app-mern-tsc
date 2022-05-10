import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button type="button" className="btn btn-sm btn-primary fab" onClick={handleOnClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

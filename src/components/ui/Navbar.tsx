import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button className="btn btn-sm btn-danger" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Salir
      </button>
    </div>
  );
};

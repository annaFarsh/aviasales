import { showMoreTickets } from "../store/ticketsSlice";
import { useDispatch } from "react-redux";
function ShowMore() {
  const dispatch = useDispatch();
  return (
    <div className="show-more">
      <button
        onClick={() => dispatch(showMoreTickets())}
        className=" show-more__button button"
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
}
export default ShowMore;

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage, getAllJobs } from "../features/allJobs/allJobsSlice";
import { useEffect } from "react";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newNum = page + 1;
    if (newNum > numOfPages) {
      newNum = 1;
    }
    dispatch(changePage(newNum));
  };
  const prevPage = () => {
    let newNum = page - 1;
    if (newNum < 1) {
      newNum = numOfPages;
    }
    dispatch(changePage(newNum));
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((a) => {
          return (
            <button
              key={a}
              type="button"
              className={a === page ? "pageBtn active" : "pageBtn"}
              onClick={() => dispatch(changePage(a))}
            >
              {a}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;

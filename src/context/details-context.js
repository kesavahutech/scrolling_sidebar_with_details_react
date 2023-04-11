import { createContext, useState } from "react";

const DetailContext = createContext({
    showDetail : "",
    updateShowDetail : () => {},
    detaildata : "",
    updateDetailData : () => {}
})

export const DetailContextProvider = (props) => {
    const [showDetail , setshowDetail] = useState(false);
    const [detaildata , setdetailData] = useState(null);

    const updateDetailData = (obj) => {
        setdetailData(obj)
    }

    const updateshowDetail = (bool) => {
        setshowDetail(bool)
    }

    const values = {
        showDetail : showDetail,
        updateShowDetail : updateshowDetail,
        detaildata : detaildata,
        updateDetailData : updateDetailData
    }

    return(<DetailContext.Provider value={values}>{props.children}</DetailContext.Provider>)
}

export default DetailContext;
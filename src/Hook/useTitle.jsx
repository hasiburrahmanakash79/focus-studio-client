import  { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Focus Studio`
    },[title])
};

export default useTitle;
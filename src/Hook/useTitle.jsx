import  { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Sports Academy`
    },[title])
};

export default useTitle;
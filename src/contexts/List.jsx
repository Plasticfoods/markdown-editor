import { createContext, useState, useEffect } from "react";

export const ListContext = createContext(null);

export const ListProvider = ({ children }) => {
    const [markdownList, setMarkdownList] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const storedList = localStorage.getItem('md-list');
        if (storedList) {
            setMarkdownList(JSON.parse(storedList));
        } else {
            // Initialize with a default value when there's no stored data
            const defaultList = [{
                name: 'Example.md',
                content: '# Hello, world!',
                id: Math.random().toString(36).substr(2, 9), // Generate a random ID
                createdAt: new Date().toISOString(),
            }];
            setMarkdownList(defaultList);
            localStorage.setItem('md-list', JSON.stringify(defaultList));
        }
    }, []);


    useEffect(() => {
        // if(curr-list is not null)
        if (markdownList !== null) {
            localStorage.setItem('md-list', JSON.stringify(markdownList));
        }
    }, [markdownList]);

    const addItem = () => {
        const newItem = {
            name: 'Example.md',
            content: '# Hello, world new file!',
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date()
        };
        setMarkdownList([...markdownList, newItem]);
        setCurrentIndex(markdownList.length);
    }

    const updateItem = (name, content) => {
        markdownList[currentIndex].name = name;
        markdownList[currentIndex].content = content;
        setMarkdownList([...markdownList]);
    }

    const deleteItem = () => {
        markdownList.splice(currentIndex, 1);
        setMarkdownList([...markdownList]);
        setCurrentIndex(0);
    }

    return (
        <ListContext.Provider value={{ markdownList, addItem, updateItem, deleteItem, currentIndex, setCurrentIndex }}>
            {children}
        </ListContext.Provider>
    );
};

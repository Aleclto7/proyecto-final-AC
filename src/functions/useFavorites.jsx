import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../functions/useLocalStorage.js'

const FavoritesContext = createContext()

export const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', [])

    const handleFavorite = (item) => {
        const exists = favorites.find(p => p.id === item.id);

        if (exists) {
            const update = favorites.filter(p => p.id !== item.id);
            setFavorites(update)
        } else {
            setFavorites([...favorites, item]);
        }
    }

    return (
        <FavoritesContext.Provider value={{favorites, handleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}
export const useFavorites = () => useContext(FavoritesContext)
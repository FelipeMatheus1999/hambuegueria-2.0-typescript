import { useContext, createContext, useState, ReactNode } from "react";
import hamburguer from "../../assets/202109090436_skn5yx754p 1.png";
import xKenzie from "../../assets/202109200440_749eet5vy86 1.png";
import bigKenzie from "../../assets/202109200440_8fcy91zr6le 1.png";
import comboKenzie from "../../assets/202110050424_xijoowz172 1.png";
import fanta from "../../assets/202108180426_tbwjnwcd1zq 1.png";
import coca from "../../assets/202108180426_861zezb4bh 1.png";
import mcShake from "../../assets/202108250455_4498m9wq98e 1.png";
import sundae from "../../assets/202110110503_g22mtz565td 1.png";

interface Item {
  name: string;
  id: number;
  price: number;
  image: string;
  category: string;
  number: number;
}

interface MenuContextData {
  menu: Item[];
}

interface MenuProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider = ({ children }: MenuProps) => {
  const [menu] = useState([
    {
      id: 1,
      name: "Hamburger",
      price: 14.0,
      image: hamburguer,
      category: "Sanduíches",
      number: 0,
    },
    {
      id: 2,
      name: "X-Kenzie",
      price: 16.0,
      image: bigKenzie,
      category: "Sanduíches",
      number: 0,
    },
    {
      id: 3,
      name: "Big Kenzie",
      price: 18.0,
      image: xKenzie,
      category: "Sanduíches",
      number: 0,
    },
    {
      id: 4,
      name: "Combo Kenzie",
      price: 28.0,
      image: comboKenzie,
      category: "Combos",
      number: 0,
    },
    {
      id: 5,
      name: "Fanta Laranja",
      price: 5.0,
      image: fanta,
      category: "Bebidas",
      number: 0,
    },
    {
      id: 6,
      name: "Coca-Cola",
      price: 7.0,
      image: coca,
      category: "Bebidas",
      number: 0,
    },
    {
      id: 7,
      name: "McShake OvoMaltine",
      price: 10.0,
      image: mcShake,
      category: "Sobremesas",
      number: 0,
    },
    {
      id: 8,
      name: "Sundae",
      price: 10.0,
      image: sundae,
      category: "Sobremesas",
      number: 0,
    },
  ]);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

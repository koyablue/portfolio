import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from 'react-icons/io'
import { ProjectTypeId } from "../../types/project";
import styles from "./Menu.module.css";

type Props = {
  title: string;
  isParent?: boolean;
  className?: string
  onClick?: () => void
  children?: ReactNode;
};

const Accordion = ({ title, isParent, className, onClick = () => {/* do nothing */}, children }: Props) => {
  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setshowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const [reverseIcon, setReverseIcon] = useState(false);

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current?.clientHeight;
      setChildHeight(height);
    }
  }, []);

  const handleClick = () => {
    if (childElement.current) {
      setshowChildren(!showChildren);
    }
    setReverseIcon(!reverseIcon);
    onClick()
  };

  // console.log('children: ', children)
  // console.log('showChildren: ', showChildren)
  console.log('children && showChildren: ', children && showChildren)
  console.log('childHeight: ', children && showChildren ? `${childHeight}px` : "0px")
  console.log('childOpacity: ', children && showChildren ? 1 : 0)

  return (
    <>
      <div
        onClick={handleClick}
        className={`flex items-center ${isParent ? 'justify-between' : 'justify-center'}
          w-48 h-[50px]
          border-b border-slate-400
          py-[10px] px-[20px]
          mb-2
          cursor-pointer
          ${!isParent && 'hover:text-clrHyperViolet'}
          ${className}`}
      >
        {title}
        {isParent && (
          <div>
            <IoMdArrowDropdown className={`
              text-sm flex items-center
              right-[0px] top-[50%]
              transform
              transition-transform
              rotate-0
              ${reverseIcon && 'rotate-180'}`
            } />
          </div>
        )}
      </div>
      <div
        className=''
        style={{
          transition: 'height 0.2s linear, opacity 0.2s ease-in',
          height: children && showChildren ? `${childHeight}px` : "0px",
          opacity: children && showChildren ? 1 : 0,
        }}
      >
        <div ref={childElement} className='bg-clrWhite border border-slate-400'>{children}</div>
      </div>
    </>
  );
};

export default Accordion

import styled from 'styled-components'
import { FontLarge, FontMedium } from '../../layout/mixins'
import MenuArrowRightIcon from '../../layout/icons/menu-arrow-right.svg'
import TrashIcon from '../../layout/icons/trash.svg'
import EditIcon from '../../layout/icons/edit.svg'
import EditableInput from '../EditableInput'

export const Heading1 = styled.h1`
  ${FontLarge}
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const Heading2 = styled.h2`
  ${FontMedium}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorAccent};
  margin-bottom: ${({ theme }) => theme.gutter};
  cursor: pointer;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colorAccent};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colorAccent};
    color: ${({ theme }) => theme.colorWhite};
  }

  .list--open & {
    background: ${({ theme }) => theme.colorAccent};
    color: ${({ theme }) => theme.colorWhite};
    margin-bottom: 0;
  }
`

export const IconGroup = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => theme.gutterSmall};
  }

  svg:first-of-type {
    margin: 0;
  }
`

export const ListContainer = styled.div``

export const List = styled.ul`
  background: ${({ theme }) => theme.colorWhite};
  margin-bottom: ${({ theme }) => theme.gutter};
  border: 1px solid ${({ theme }) => theme.colorAccent};
  border-top: none;
  display: none;

  .list--open & {
    display: block;
  }
`

export const ListItem = styled.li`
  position: relative;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.colorGrayOpacity};
    color: ${({ theme }) => theme.colorWhite};
  }

  .active&:hover {
    background: none;
    cursor: text;
  }
`

export const StyledEditableInput = styled(EditableInput)`
  .active & {
    cursor: text;
  } 
`

export const ItemIconGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding-right: 1rem;
  display: none;

  ${ListItem}:hover & {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: ${({ theme }) => theme.gutterSmall};
    color: ${({ theme }) => theme.colorGray};
    cursor: pointer;
  }

  svg:first-of-type {
    margin: 0;
  }

  svg:hover {
    color: ${({ theme }) => theme.colorAccent};
  }
`

export const MenuArrow = styled(MenuArrowRightIcon)`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};

  .list--open & {
    transform: rotate(90deg);
  }  
`

export const Trash = styled(TrashIcon)`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
`

export const Edit = styled(EditIcon)`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
`
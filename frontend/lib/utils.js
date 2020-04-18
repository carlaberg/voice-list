import { createElement as h } from 'react';
import styled from 'styled-components';

const { DOMAIN } = process.env
export const trimSlashes = str => str.replace(/^\/|\/$/g, '')
export const trimDomain = str => str.replace(DOMAIN, '')
export const trimUnits = value => value.match(/(\d+(\.\d+)?)/)[0]
export const linkSlug = url => {
    url = trimDomain(url)
    url = trimSlashes(url)
    return `/?slug=${url}`
}

// Higher order function to enable dynamic tags for styled-components
export const withDynamicTag = Component => {
    const bucket = Object.create(null);
    const DynamicTag = props => {

        // if (typeof tag !== 'string' || !styled.hasOwnProperty(tag)) {
        //   return h(Component, props);
        // }
        let tag;
        if (!props.hasOwnProperty('tag')) {
            tag = Component.target
        } else {
            tag = props.tag
        }

        if (bucket[tag] === undefined) {
            bucket[tag] = Component.withComponent(tag);
        }

        return h(bucket[tag], props);
    };


    const name = Component.displayName || Component.constructor.name;

    if (name) {
        DynamicTag.displayName = `DynamicTag(${name})`;
    }

    return DynamicTag;
};

export const arrayOfObjectsToObjectWithItemIdsAsKey = (items) => {
    items.userLists.reduce((obj, item) => {
        obj[item._id] = {
          ...item,
          open: false
        }
        return obj
      }, {})
}
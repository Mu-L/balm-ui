import merge from 'deepmerge';
import getType from '../utils/typeof';
import {
  VueComponent,
  DefaultPropsObject,
  Mixin,
  CommonPropsObject
} from '@balm-ui-types';

const setPropsDefaultValue = ({
  componentProps,
  propName,
  props
}: DefaultPropsObject) => {
  const newValue = props[propName];

  if (getType(newValue) === 'object') {
    const defaultValue = componentProps[propName].default;
    componentProps[propName].default = () => merge(defaultValue, newValue);
  } else if (Array.isArray(newValue)) {
    componentProps[propName].default = () => newValue;
  } else {
    componentProps[propName].default = newValue;
  }
};

const setPropsInMixins = ({
  componentMixins,
  propName,
  props
}: CommonPropsObject) => {
  if (componentMixins.length) {
    let i = componentMixins.length;
    while (i--) {
      if (
        componentMixins[i].props &&
        componentMixins[i].props[propName] !== undefined
      ) {
        setPropsDefaultValue({
          componentProps: componentMixins[i].props,
          propName,
          props
        });
        break;
      }
    }
  }
};

const configure = (Component: VueComponent, props: any) => {
  Object.keys(props).forEach((propName) => {
    if (Component.props) {
      if (Component.props[propName] === undefined) {
        // Overwrite props in mixins
        setPropsInMixins({
          componentMixins: Component.mixins as Mixin[],
          propName,
          props
        });
      } else {
        // Overwrite props
        setPropsDefaultValue({
          componentProps: Component.props,
          propName,
          props
        });
      }
    } else {
      // Overwrite props in mixins
      setPropsInMixins({
        componentMixins: Component.mixins as Mixin[],
        propName,
        props
      });
    }
  });
};

export default configure;

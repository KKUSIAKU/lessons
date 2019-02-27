import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';


describe(' Input element testing ', function(){

  describe('Should hold a type attribute/props', function(){
    it( 'Type props should default to text when not input ', function(){
      const input = shallow(<Input/>);
      const type = input.props().type; 
      expect(type).toBe('text')
    });

    it('Input type should be phone', function(){
      const input = shallow(<Input type='phone'/>);
      const type = input.props().type; 
      expect(type).toBe('phone')
    })
  });

})
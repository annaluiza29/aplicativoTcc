
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>
        <Text>{isOn ? 'Desligar' : 'Ligar'}</Text>
        
      </TouchableOpacity>
    </View>




  );
};

export default ToggleButton;


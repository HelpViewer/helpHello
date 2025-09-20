const customizationPluginName = 'puiButtonCustPackage';
loadPlugin(customizationPluginName, loadPluginListBasePath(customizationPluginName)).then(x => 
  activatePlugin(customizationPluginName, '', STO_DATA));
const pluginWatermark = 'puiWatermark';
activatePlugin(pluginWatermark, '', source = STO_HELP);

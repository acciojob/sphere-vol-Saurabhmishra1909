function volume_sphere() {
    //Wvrite your code here
	const radii=document.getElementById('radius');
	const vol=document.getElementById('volume');
	const radius=parseFloat(radii.value);
	if(isNaN(radius)||radius<0){
		vol.value='NaN';
		return;
	}
	const volume=(4/3)*Math.PI*Math.pow(radius,3);
	vol.value=volume.toFixed(4);
}  

window.onload = function () {
  document.getElementById('MyForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent the form from submitting
    volume_sphere(); // Call the volume_sphere function
  };
};

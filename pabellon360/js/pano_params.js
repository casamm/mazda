
	
		// check for CSS3 3D transformations and WebGL
		if (ggHasHtml5Css3D() || ggHasWebGL()) {
		// use HTML5 panorama
	
			// create the panorama player with the container
			pano=new pano2vrPlayer("container");
			panorama='<?xml version="1.0" encoding="UTF-8"?>';
			panorama+='<tour start="node2">';
			panorama+='  <panorama id="node2">';
			panorama+='    <view fovmode="0" pannorth="0">';
			panorama+='      <start pan="0" fov="70" tilt="0"/>';
			panorama+='      <min pan="0" fov="5" tilt="-90"/>';
			panorama+='      <max pan="360" fov="120" tilt="90"/>';
			panorama+='    </view>';
			panorama+='    <userdata title="" datetime="" description="" copyright="" tags="" author="" source="" comment="" info="" longitude="" latitude=""/>';
			panorama+='    <hotspots width="180" height="20" wordwrap="1">';
			panorama+='      <label width="180" backgroundalpha="1" enabled="1" height="20" backgroundcolor="0xffffff" bordercolor="0x000000" border="1" textcolor="0x000000" background="1" borderalpha="1" borderradius="1" wordwrap="1" textalpha="1"/>';
			panorama+='      <polystyle mode="0" backgroundalpha="0.2509803921568627" backgroundcolor="0x0000ff" bordercolor="0x0000ff" borderalpha="1"/>';
			panorama+='      <polyhotspot title="" target="90/-4/70" url="{node3}" id="Poly01">';
			panorama+='        <vertex pan="-14.7032" tilt="4.72749"/>';
			panorama+='        <vertex pan="-16.4352" tilt="-19.7835"/>';
			panorama+='        <vertex pan="-64.8022" tilt="-29.7997"/>';
			panorama+='        <vertex pan="-60.1362" tilt="15.3088"/>';
			panorama+='      </polyhotspot>';
			panorama+='      <polyhotspot title="" target="0/0/70" url="{node1}" id="Poly02">';
			panorama+='        <vertex pan="-118.783" tilt="14.4645"/>';
			panorama+='        <vertex pan="159.417" tilt="18.9534"/>';
			panorama+='        <vertex pan="159.216" tilt="-17.7993"/>';
			panorama+='        <vertex pan="-120.769" tilt="-15.1899"/>';
			panorama+='      </polyhotspot>';
			panorama+='    </hotspots>';
			panorama+='    <media>';
			panorama+='      <video pansize="10.000" id="_element_0" level="1.000" stretch="1.000" rotx="-8.000" clickmode="2" roty="-10.000" mode="1" rotz="-6.000" width="1280" ambientlevel="0.000" field="90.000" pan="-87.290" tilt="-3.630" height="720" loop="1" fov="33.020" tiltsize="10.000">';
			panorama+='        <source url="RCI_ComeSeek_Launch LR_1_compressed.mp4"/>';
			panorama+='      </video>';
			panorama+='      <image width="800" rotx="0.000" roty="0.000" rotz="0.000" pan="-40.100" stretch="1.000" fov="9.000" height="800" id="_element_1" tilt="-6.130" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='      <image width="800" rotx="0.000" roty="3.000" rotz="0.000" pan="-168.220" stretch="1.000" fov="9.000" height="800" id="_element_2" tilt="2.440" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='    </media>';
			panorama+='    <input tile0url="images/int1_f.jpg" prev5url="images/int1__previewd.jpg" prev4url="images/int1__previewu.jpg" prev3url="images/int1__previewl.jpg" prev2url="images/int1__previewb.jpg" prev1url="images/int1__previewr.jpg" prev0url="images/int1__previewf.jpg" tile5url="images/int1_d.jpg" tilesize="760" tile4url="images/int1_u.jpg" tile3url="images/int1_l.jpg" tilescale="1.013158" tile2url="images/int1_b.jpg" tile1url="images/int1_r.jpg">';
			panorama+='      <preview color="0x808080"/>';
			panorama+='    </input>';
			panorama+='    <autorotate speed="0.400" nodedelay="0.00" startloaded="0" returntohorizon="0.000" delay="5.00" noderandom="1"/>';
			panorama+='    <control simulatemass="1" lockedmouse="0" lockedkeyboard="0" dblclickfullscreen="0" invertwheel="0" lockedwheel="0" invertcontrol="1" speedwheel="1" sensitivity="8"/>';
			panorama+='  </panorama>';
			panorama+='  <panorama id="node3">';
			panorama+='    <view fovmode="0" pannorth="0">';
			panorama+='      <start pan="0" fov="70" tilt="0"/>';
			panorama+='      <min pan="0" fov="5" tilt="-90"/>';
			panorama+='      <max pan="360" fov="120" tilt="90"/>';
			panorama+='    </view>';
			panorama+='    <userdata title="" datetime="" description="" copyright="" tags="" author="" source="" comment="" info="" longitude="" latitude=""/>';
			panorama+='    <hotspots width="180" height="20" wordwrap="1">';
			panorama+='      <label width="180" backgroundalpha="1" enabled="1" height="20" backgroundcolor="0xffffff" bordercolor="0x000000" border="1" textcolor="0x000000" background="1" borderalpha="1" borderradius="1" wordwrap="1" textalpha="1"/>';
			panorama+='      <polystyle mode="0" backgroundalpha="0.2509803921568627" backgroundcolor="0x0000ff" bordercolor="0x0000ff" borderalpha="1"/>';
			panorama+='      <polyhotspot title="" target="10.5/-6.5/70" url="{node2}" id="Poly01">';
			panorama+='        <vertex pan="138.856" tilt="22.1964"/>';
			panorama+='        <vertex pan="67.9716" tilt="25.3508"/>';
			panorama+='        <vertex pan="66.9272" tilt="-27.7482"/>';
			panorama+='        <vertex pan="138.619" tilt="-25.694"/>';
			panorama+='      </polyhotspot>';
			panorama+='      <polyhotspot title="" target="353.5/-3/70" url="{node1}" id="Poly02">';
			panorama+='        <vertex pan="-143.366" tilt="22.3753"/>';
			panorama+='        <vertex pan="144.782" tilt="16.8594"/>';
			panorama+='        <vertex pan="143.917" tilt="-20.5269"/>';
			panorama+='        <vertex pan="-141.238" tilt="-26.3973"/>';
			panorama+='      </polyhotspot>';
			panorama+='    </hotspots>';
			panorama+='    <media>';
			panorama+='      <image width="800" rotx="0.000" roty="0.000" rotz="0.000" pan="95.080" stretch="1.000" fov="9.000" height="800" id="_element_0" tilt="-19.360" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='      <image width="800" rotx="0.000" roty="0.000" rotz="0.000" pan="178.350" stretch="1.000" fov="9.000" height="800" id="_element_1" tilt="-1.490" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='    </media>';
			panorama+='    <input tile0url="images/int2_f.jpg" prev5url="images/int2__previewd.jpg" prev4url="images/int2__previewu.jpg" prev3url="images/int2__previewl.jpg" prev2url="images/int2__previewb.jpg" prev1url="images/int2__previewr.jpg" prev0url="images/int2__previewf.jpg" tile5url="images/int2_d.jpg" tilesize="760" tile4url="images/int2_u.jpg" tile3url="images/int2_l.jpg" tilescale="1.013158" tile2url="images/int2_b.jpg" tile1url="images/int2_r.jpg">';
			panorama+='      <preview color="0x808080"/>';
			panorama+='    </input>';
			panorama+='    <autorotate speed="0.400" nodedelay="0.00" startloaded="0" returntohorizon="0.000" delay="5.00" noderandom="1"/>';
			panorama+='    <control simulatemass="1" lockedmouse="0" lockedkeyboard="0" dblclickfullscreen="0" invertwheel="0" lockedwheel="0" invertcontrol="1" speedwheel="1" sensitivity="8"/>';
			panorama+='  </panorama>';
			panorama+='  <panorama id="node1">';
			panorama+='    <view fovmode="0" pannorth="0">';
			panorama+='      <start pan="0" fov="70" tilt="0"/>';
			panorama+='      <min pan="0" fov="5" tilt="-90"/>';
			panorama+='      <max pan="360" fov="120" tilt="90"/>';
			panorama+='    </view>';
			panorama+='    <userdata title="" datetime="" description="" copyright="" tags="" author="" source="" comment="" info="" longitude="" latitude=""/>';
			panorama+='    <hotspots width="180" height="20" wordwrap="1">';
			panorama+='      <label width="180" backgroundalpha="1" enabled="1" height="20" backgroundcolor="0xffffff" bordercolor="0x000000" border="1" textcolor="0x000000" background="1" borderalpha="1" borderradius="1" wordwrap="1" textalpha="1"/>';
			panorama+='      <polystyle mode="0" backgroundalpha="0.2509803921568627" backgroundcolor="0x0000ff" bordercolor="0x0000ff" borderalpha="1"/>';
			panorama+='      <polyhotspot title="" target="6/-0.5/70" url="{node3}" id="Poly01">';
			panorama+='        <vertex pan="-175.816" tilt="17.0824"/>';
			panorama+='        <vertex pan="142.643" tilt="10.3099"/>';
			panorama+='        <vertex pan="143.291" tilt="-17.3972"/>';
			panorama+='        <vertex pan="-176.951" tilt="-27.2247"/>';
			panorama+='      </polyhotspot>';
			panorama+='      <polyhotspot title="" target="10.5/-4.5/70" url="{node2}" id="Poly02">';
			panorama+='        <vertex pan="-106.447" tilt="9.30443"/>';
			panorama+='        <vertex pan="-170.14" tilt="16.6398"/>';
			panorama+='        <vertex pan="-170.468" tilt="-28.7485"/>';
			panorama+='        <vertex pan="-106.386" tilt="-17.6324"/>';
			panorama+='      </polyhotspot>';
			panorama+='    </hotspots>';
			panorama+='    <media>';
			panorama+='      <image width="800" rotx="0.000" roty="1.000" rotz="0.000" pan="166.880" stretch="1.000" fov="9.000" height="800" id="_element_0" tilt="-2.380" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='      <image width="800" rotx="0.000" roty="0.000" rotz="0.000" pan="-152.120" stretch="1.000" fov="9.000" height="800" id="_element_1" tilt="-5.290" clickmode="0">';
			panorama+='        <source url="rc3.gif"/>';
			panorama+='      </image>';
			panorama+='      <sound ambientlevel="0.000" pansize="10.000" mode="2" loop="99" field="90.000" pan="-1.122" tiltsize="10.000" id="_element_2" level="1.000" tilt="0.751">';
			panorama+='        <source url="OceanBe-Chris_Ta-7615_hifi.mp3"/>';
			panorama+='      </sound>';
			panorama+='    </media>';
			panorama+='    <input tile0url="images/ext_f.jpg" prev5url="images/ext__previewd.jpg" prev4url="images/ext__previewu.jpg" prev3url="images/ext__previewl.jpg" prev2url="images/ext__previewb.jpg" prev1url="images/ext__previewr.jpg" prev0url="images/ext__previewf.jpg" tile5url="images/ext_d.jpg" tilesize="760" tile4url="images/ext_u.jpg" tile3url="images/ext_l.jpg" tilescale="1.013158" tile2url="images/ext_b.jpg" tile1url="images/ext_r.jpg">';
			panorama+='      <preview color="0x808080"/>';
			panorama+='    </input>';
			panorama+='    <autorotate speed="0.400" nodedelay="0.00" startloaded="0" returntohorizon="0.000" delay="5.00" noderandom="1"/>';
			panorama+='    <control simulatemass="1" lockedmouse="0" lockedkeyboard="0" dblclickfullscreen="0" invertwheel="0" lockedwheel="0" invertcontrol="1" speedwheel="1" sensitivity="8"/>';
			panorama+='  </panorama>';
			panorama+='</tour>';
			panorama+='';
			pano.readConfigString(panorama);
			// hide the URL bar on the iPhone
			setTimeout(function() { hideUrlBar(); }, 10);
			// add gyroscope controller
			gyro=new pano2vrGyro(pano,"container");
				} else 
		if (swfobject.hasFlashPlayerVersion("10.0.0")) {
			var flashvars = {};
			var params = {};
			// enable javascript interface
			flashvars.externalinterface="1";
			params.quality = "high";
			params.bgcolor = "#ffffff";
			params.allowscriptaccess = "sameDomain";
			params.allowfullscreen = "true";
			var attributes = {};
			attributes.id = "pano";
			attributes.name = "pano";
			attributes.align = "middle";
			flashvars.panoxml="ext_out.xml";
			params.base=".";
			swfobject.embedSWF(
				"pano2vr_player.swf", "container", 
				"640", "480",
				"9.0.0", "", 
				flashvars, params, attributes);
			
		}
		
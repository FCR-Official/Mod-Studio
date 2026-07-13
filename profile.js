<section class="profile">

<h2>
Your Profile
</h2>

<div id="profileCard">

<div id="bannerPreview"></div>

<img id="pfpPreview" src="">

<h3 id="namePreview">
Username
</h3>

<p id="bioPreview">
No bio yet.
</p>

</div>


<div class="editor">

<h3>
Edit Profile
</h3>


<label>
Profile Picture:
</label>

<input 
type="file"
id="pfpUpload"
accept="image/*"
>


<label>
Banner:
</label>

<input 
type="file"
id="bannerUpload"
accept="image/*"
>


<label>
Display Name:
</label>

<input 
id="displayName"
placeholder="Name"
>


<label>
Bio:
</label>

<textarea
id="bioInput"
placeholder="About me..."
></textarea>


<button onclick="saveProfile()">
Save Profile
</button>


</div>

</section>

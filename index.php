<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>tfi - form</title>
    <link rel="stylesheet" href="./dist/styles.css">
</head>
<body>
<section>
    <div class="container">
        <form action="#" method="post" enctype="multipart/form-data">
            <div class="field">
                <label for="name" class="col-sm-2">Name</label>
                <div class="field-right">
                    <input type="text" id="name" name="name">
                </div>
            </div>
            <div class="field">
                <label for="mail">Mail</label>
                <div class="field-right">
                    <input type="email" id="mail" name="mail">
                </div>
            </div>
            <div class="field">
                <label for="password">Password</label>
                <div class="field-right">
                <input type="password" id="password" name="password">
                </div>
            </div>
            <div class="field">
                <label for="gender">Gender</label>
                <div class="field-right">
                <input type="radio" id="gender" name="gender" value="Male" checked>Male
                <input type="radio" id="gender" name="gender" value="Female">Female
                </div>
            </div>
            <div class="field">
                <label for="birthday">Birthday</label>
                <div class="field-right">
                    <input type="date" id="birthday" name="birthday">
                </div>
            </div>
            <div class="field">
                <label for="contact">Contacts</label>
                <div class="field-right">
                <select name="contact" id="contact">
                    <option value="Skype">Skype</option>
                    <option value="vk">Vkontakte</option>
                    <option value="zoom">Zoom</option>
                </select>
                <input type="text" id="contact" name="contact-name" placeholder="johndoe">
                <button type="button" name="delete">Delete</button>
                </div>
            </div>
            <div class="field">
                <label for="contact2"></label>
                <div class="field-right">
                <select name="contact2" id="contact">
                    <option value="Other">Other</option>
                </select>
                <input type="text" id="contact2" name="contact2-title-site" placeholder="Facebook">
                <input type="text" id="contact2" name="contact2-name" placeholder="johndoe">
                <button type="button" name="delete">Delete</button>
                </div>
            </div>
            <div class="field">
                <label for=""></label>
                <div class="field-right">
                <button type="button" class="btn btn-blue">Save</button>
                or
                <button type="button" class="btn btn-white">Add new</button>
                </div>
            </div>
            <div class="field">
                <label for="photo">Photo</label>
                <div class="field-right">
                <fieldset>
                    <input type="file">
                </fieldset>
                </div>
            </div>
            <div class="field">
                <label for="hobbies">Hobbies</label>
                <div class="field-right">
                <select name="hobbies" id="hobbies" multiple>
                    <option value="movies">Movies</option>
                    <option value="music">Music</option>
                    <option value="cooking">Cooking</option>
                    <option value="photography">Photography</option>
                    <option value="chess">Chess</option>
                    <option value="swimming">Swimming</option>
                </select>
                </div>
            </div>
            <div class="field">
                <label for="someWords">Some words</label>
                <div class="field-right">
                <textarea name="someWords" id="someWords"></textarea>
                </div>
            </div>
            <div class="field"><label for="agree"></label>
                <div class="field-right">
                <input type="checkbox" id="agree">Agreement
                </div>
            </div>
            <div class="field">
                <label for=""></label>
                <div class="field-right">
                <input type="submit" value="Update profile" class="btn btn-blue">
                <input type="submit" value="Next" class="btn btn-gray">
                </div>
            </div>
        </form>
    </div>
</section>
<script src="./dist/bundle.js"></script>
</body>
</html>
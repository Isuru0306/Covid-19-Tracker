<?php

require_once __DIR__ . '/vendor/autoload.php'; // change path as needed

$fb = new \Facebook\Facebook([
  'app_id' => '240900141372583',
  'app_secret' => '48908b8509f1bb7d6a92856d8f8cb167',
  'default_graph_version' => 'v2.10',
  //'default_access_token' => '{access-token}', // optional
]);

$helper = $fb->getRedirectLoginHelper();
$permissions = ['email']; // optional

try 
{
  if (isset($_SESSION['facebook_access_token'])) 
  {
    $accessToken = $_SESSION['facebook_access_token'];
  } 
  else 
  {
    $accessToken = $helper->getAccessToken();
  }
} 

catch(Facebook\Exceptions\facebookResponseException $e) 
{
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} 
catch(Facebook\Exceptions\FacebookSDKException $e) 
{
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
if (isset($accessToken)) 
{
if (isset($_SESSION['facebook_access_token'])) 
{
  $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
}
else 
{
  // getting short-lived access token
  $_SESSION['facebook_access_token'] = (string) $accessToken;
    // OAuth 2.0 client handler
  $oAuth2Client = $fb->getOAuth2Client();
  // Exchanges a short-lived access token for a long-lived one
  $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);
  $_SESSION['facebook_access_token'] = (string) $longLivedAccessToken;
  // setting default access token to be used in script
  $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
}
// redirect the user to the profile page if it has "code" GET variable
if (isset($_GET['code'])) 
{
    header('Location:profile.php');
}
// getting basic info about user
try 
{
    $profile_request = $fb->get('/me?fields=name,first_name,last_name,email');
    $profile = $profile_request->getGraphUser();
    $fbid = $profile->getProperty('id');           // To Get Facebook ID
    $fbfullname = $profile->getProperty('name');   // To Get Facebook full name
    $fbemail = $profile->getProperty('email');    //  To Get Facebook email

    print_r($fbfullname);

    # Create sessions
    $_SESSION["name"] = $fbfullname;
    $_SESSION["email"] = $fbemail;
    $_SESSION["fbid"] = $fbid;
}

catch(Facebook\Exceptions\FacebookResponseException $e) 
{
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();
  session_destroy();
  // redirecting user back to app login page
  header("Location: ./");
  exit;
} 
catch(Facebook\Exceptions\FacebookSDKException $e) 
{
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
?>
<?php
} 
else 
{
    // replace your website URL same as added in the developers.Facebook.com/apps e.g. if you used http instead of https and you used            
    $loginUrl = $helper->getLoginUrl('http://localhost/fb.php', $permissions);
    // print_r($loginUrl);
    
}
?>
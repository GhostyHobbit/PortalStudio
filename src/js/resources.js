import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    // art
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    AlchemistLamp: new ImageSource('images/alchemistwlamp.png'),
    Letter: new ImageSource('images/letter.png'),
    SceneTransition: new ImageSource('images/sparklybar.png'),
    LevelOneScreenOne: new ImageSource('images/levelone/sceneone.png'),
    LevelOneSceneTwo: new ImageSource('images/levelone/levelonescenetwo.png'),
    levelTwoPlaceholder: new ImageSource('images/leveltwo/level_2_placeholder.png'),
    Intro: new ImageSource('images/introscene.png'),
    Dialogue: new ImageSource('images/dialogue.png'),
    L1Door: new ImageSource('images/levelone/door.png'),
    LevelFour: new ImageSource('images/LevelfourGood.png'),
    Floor: new ImageSource('images/floorbar.png')
    // music
    // MainThemeMusic: new Sound('music/CLE_4_Main_Theme.mp3'),
    // LevelOneMusic: new Sound('music/CLE_4_Level_1.mp3'),
    //LevelFourGoodEndingMusic: new Sound('music/CLE_4_Level_4_good_ending.mp3')
}
const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }
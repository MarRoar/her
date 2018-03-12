/**
 * We are both programmers,So I want to celebrate your birthday in a programmer's way
 */
Family yourFamily = new Family();
// Aug, 24, You were born
Girl u = yourFamily.addNewMeber("CuiLijun");
// You grew up in this family
u.growing();
// You make friends with others
Friend yourFriends = u.makeFriends();
// I am very glad to be your friend
Friend i = yourFriends.oneOf(u);
// 
String words = "Hoping God bless you greatly,Wish everything fine with your work.forever 18.";
i.celebrate(u, words);
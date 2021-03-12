import React, { Component } from "react";

export default class RenderMovieList extends Component {
  data = [
    {
      movieCode: 1283,
      movieName: "To All the Boys: P.S. I Still Love You",
      pseudonym: "to-all-the-boys-ps-i-still-love-you",
      trailer: "https://www.youtube.com/embed/LIU4xb61PHc",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQVr0uKX5z9VN6iGqGSrgDxr7Y4AeDI7Cvd476qxJWqrG2IABDdiQsf31ySybeLsv1dhU868i6c0tj4reJD37_D-lQyfadu_2uMfZVUvxYc5v4jv2p0BTcQ0TlgS.jpg?r=56b",
      description:
        "Lara Jean and Peter have just taken their relationship from pretend to officially official when another recipient of one of her old love letters enters the picture.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1284,
      movieName: "Your lie in April",
      pseudonym: "your-lie-in-April",
      trailer: "https://www.youtube.com/embed/3aL0gDZtFbE",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTaewjOmdPxP8t3W-j-WaMkw2bT2Y5alFbRoZYJ84FYuZNG1zHgO7kfGk5KtuWevhs4y8zwykDG4PQGpVDcB0UY9Jf4.jpg?r=4c0",
      description:
        "I met the girl under full-bloomed cherry blossoms…my dull and monotonous days were once again colorful.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1285,
      movieName: "Home",
      pseudonym: "home",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdzmzBOkn4XDEMVWcaeXR1H0RM0kexkv_RXnMpQi5oQqrHJXFpHuoaGZk2GrojEJp0WVf3ez8Vj78IH4UKtmjIp-ciQ6gZ2qBmWi_j7Jx4ORKTs2Bnm7qnVyiHfX.webp?r=49a",
      description:
        "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1286,
      movieName: "Supergirl",
      pseudonym: "supergirl",
      trailer: "https://www.youtube.com/embed/mlgL6FbqsVI",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSWw6XRkNb_NswxkpOYQ5SijkzoQfrOBBoFGQaaxx9m5uAh5ISlIePfogY4wW_f2ZT_ti-uUMvKhyMVX3i8Luu_nkik.webp?r=3e0",
      description:
        "Years ago, Krypton was about to explode and Kal-El was sent to Earth to escape that fate. However, his older cousin, Kara, was also intended to accompany the infant as his protector. Unfortunately, Kara was accidentally diverted into the timeless Phantom Zone for years before finally arriving on Earth decades later and found by her cousin who had grown into Superman.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1287,
      movieName: "Alive",
      pseudonym: "alive",
      trailer: "https://www.youtube.com/embed/jQ8CCg1tOqc",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbOVIpm09SwSL2ozBAt0w6s2Cp1i55gYOJNBCv4rC_7wA7NtgjdGSwkNAKnqDk-qx2PVBo-p3gkP1HidTSnDxGdDVrZhHiHN1jL2QnLkKXt6oAabW0g4IMBgXsRs.jpg?r=400",
      description:
        "As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1288,
      movieName: "Mowgli: Legend of the Jungle",
      pseudonym: "mowgli-legend-of-the-jungle",
      trailer: "https://www.youtube.com/embed/OVBjPpUlQrE",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ61mzfu5UzVAG64t_mp6Gd9O2AtIhVFnySTZwI8Ck37885hMgwuAZxsfBx5L6C-pJ7mkwNTEy0ZMnCg6gPOI32_r4D4B8IdxioH6vrcNaszadpGo97Mzq6Tz9aO.jpg?r=74c",
      description:
        "Mowgli has never truly belonged in either the wilds of the jungle or the civilized world of man. Now he must navigate the inherent dangers of each on a journey to discover where he truly belongs. ",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1289,
      movieName: "Supernatural",
      pseudonym: "supernatural",
      trailer: "https://www.youtube.com/embed/775JyzDTk",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUMQZI3VDXbarbbbYHu3FFtnR8qKUJyzbwVXwFrDqf1ufNrKOSSTbYRNc3vpzOLKpTTAXElngvFmFS7l-PYcHA9Ci0.webp?r=d22",
      description:
        "This television drama is about the two Winchester brothers, Sam and Dean, who were raised by their father, John, to hunt and kill all things that go 'bump in the night' after his wife, Mary, was murdered by an evil supernatural being when the boys were young.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1290,
      movieName: "Mad Max: Fury Road",
      pseudonym: "mad-max-fury-road",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZIaPo6RQTaFDDu0uZrkF8VQa-XmLTOwPqvtMvS6O1JO032VscO1giBs1Ku7EoU7nT2g5tIpBKnXlZrUiHLzAWensis.jpg?r=364",
      description:
        "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1291,
      movieName: "Naruto",
      pseudonym: "naruto",
      trailer: "https://www.youtube.com/embed/-G9BqkgZXRA",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJ8tf7CQ4KJE9UzhDlOrJYYfa41OjwBgX1E_ILgxRptKPKTmKXS3sCFQH-J_xgIHmTqzqkPI5NGunvDA-yY0FVs218.webp?r=777",
      description:
        "Many years ago, in the hidden village of Konoha, lived a great demon fox. When it swung one of it's nine tails, a tsunami occurred. The fourth hokage sealed this demon fox inside a boy in exchange for his own life. Naruto was that boy, and he grew up with no family, and the villagers hated him thinking that he himself was the demon fox. Naruto's dream is to become Hokage, and have the villagers acknowledge him.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1292,
      movieName: "Stranger Things",
      pseudonym: "stranger-things",
      trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXil1GVMBmZfWRDgv8Oq1dOqlgvKLItmtpchvwEPGoU2ThaQrR_ytmfb1lyRysgFUISTo6UOqUNQeF2NYL5_-5KtHI7l5EeOF4uoyWdYou8NJjMm3vMEFhnaRyGT.jpg?r=a6f",
      description:
        "A love letter to the supernatural classics of the 80's, Stranger Things is the story of a young boy who vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1293,
      movieName: "The Walking Dead",
      pseudonym: "the-walking-dead",
      trailer: "https://www.youtube.com/embed/R1v0uFms68U",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa4oI7oJWTP9_3vh6FmzmDN_LievSY2ibi7N7oFlnwfRNd9b-2OYdfsXs-C0mDv0iFmis89_3AiPS0v2mYHGfdXCTOc.jpg?r=5d1",
      description:
        "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1294,
      movieName: "Grey's Anatomy",
      pseudonym: "grey-s-anatomy",
      trailer: "https://www.youtube.com/embed/q1pcpgREQ5c",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ728k-wG94f6nvGdc4g_1ma4Yx2IGG2D_tm4ThSh40kwMEP1d1CYci-U8SxpYTmTfJpwHQu1f8nDtFmvn6fpXh3gOo.webp?r=569",
      description:
        "A medical based drama centered around Meredith Grey, an aspiring surgeon and daughter of one of the best surgeons, Dr. Ellis Grey. Throughout the series, Meredith goes through professional and personal challenges along with fellow surgeons at Seattle Grace Hospital.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
    {
      movieCode: 1295,
      movieName: "Pokémon the Series: Sun & Moon",
      pseudonym: "pokemon-the-series-sun-&-moon",
      trailer: "https://www.youtube.com/embed/5XgjmXLwe18",
      image:
        "https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABefT3For7MNKcnf0D1nzwzCOtdbsEKGA4XfbX57JQCQtWUBFLy2dUf7vmt7fnP4v2nRqzGCwRbYw4tO4yLIvfBzi7LE.webp?r=990",
      description:
        "Ash is new to the Alola region. He's found some new friends, and new Pokémon too. Follow him, Pikachu, Mallow and more in this hilarious adventure: Pokémon Sun and Moon Abridged.",
      groupCode: "GP00",
      startDate: "2019-07-29T00:00:00",
      rating: 5,
    },
  ];
  render() {
    return (
      <div>
        <h1>Movie List</h1>
      </div>
    );
  }
}

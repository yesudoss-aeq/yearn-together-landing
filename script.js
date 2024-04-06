$(document).ready(function () {
  $(".demo").slick({
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: "slick-dots",
  });

  var header = $("header");
  var menuBtn = $(".menu-icon");
  var menuList = $("header ul");
  var navContent = $(".nav-content");
  var requestBtn = $("header .primary-btn");
  var menuIcon = "./assets//images/menu-bar.png";
  var closeIcon = "./assets//images/close-icon.png";

  $(window).on("resize", () => {
    var $width = $(this).width();
  });

  $(menuBtn).click(() => {
    $(header).toggleClass("header-bg");
    $(navContent).toggleClass("nav-content-dropdown");
    $(menuList).toggleClass("header-display-hide");
    $(requestBtn).toggleClass("header-display-hide");
  });
});

const handleParticipation = () => {
  window.open("https://app.yearntogether.com/");
};

const AffiliateLearnMore = () => {
  window.open("https://affiliate.yearntogether.com/");
};

const HandleReadMore = () => {
  window.open("https://docs.yearntogether.com/");
};

const handlePlayIcon = (type) => {
  switch (type) {
    case "participate":
      window.open("https://www.youtube.com/watch?v=iubKwVTMmQo");
      break;
    default:
      window.open("https://www.youtube.com/watch?v=TZVXKFcc4bA");
  }
};

const handleLaunchApp = () => {
  window.open("https://app.yearntogether.com/");
};

const handleGameCardButton = () => {
  window.open("https://docs.yearntogether.com/welcome/introduction");
};

const handleGameplay = (key) => {
  switch (key) {
    case "participate2yearn":
      window.open(
        "https://docs.yearntogether.com/how-to-earn/participate-to-earn"
      );
      break;
    case "promote2yearn":
      window.open("https://docs.yearntogether.com/how-to-earn/promote-to-earn");
      break;
    case "predict2yearn":
      window.open("https://docs.yearntogether.com/how-to-earn/predict-to-earn");
      break;
    case "perform2yearn":
      window.open("https://docs.yearntogether.com/how-to-earn/perform-to-earn");
      break;
    case "pool2yearn":
      window.open("https://docs.yearntogether.com/how-to-earn/pool-to-earn");
      break;
    default:
      break;
  }
};

const getLiveData = () => {
  console.log("getLiveData");
  fetch("https://api.thegraph.com/subgraphs/name/ytgweb3ninja/platform-core", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query MyQuery {
  platformStatistics {
    id
    isExecutionEnabled
    totalAffiliateUser
    totalDepsitAmount
    totalPaidUser
    totalReferralAmount
    totalTickets
    totalUser
    totalWinningAmount
  }
}
      `,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data.platformStatistics[0]);
      document.getElementById("totalUsers").innerHTML = res.data
        .platformStatistics[0].totalUser
        ? res.data.platformStatistics[0].totalUser
        : 0;
      document.getElementById("passCount").innerHTML = res.data
        .platformStatistics[0].totalTickets
        ? res.data.platformStatistics[0].totalTickets
        : 0;
      document.getElementById("referralDistributed").innerHTML =
        res.data.platformStatistics[0].totalReferralAmount > 0
          ? `$ ${
              res.data.platformStatistics[0].totalReferralAmount /
              Math.pow(10, 18)
            }`
          : `$ 0`;
      document.getElementById("totalDeposited").innerHTML =
        res.data.platformStatistics[0].totalDepsitAmount > 0
          ? `$ ${
              res.data.platformStatistics[0].totalDepsitAmount /
              Math.pow(10, 18)
            }`
          : `$ 0`;
    })
    .catch((err) => {
      console.log(err);
    });
  // window.open("https://app.yearntogether.com/");
};

/* 
Imp Links 
FAQ : https://docs.yearntogether.com/yearntogether/frequently-asked-questions
T&C : https://docs.yearntogether.com/terms-and-conditions/terms-and-conditions
Policy : https://docs.yearntogether.com/terms-and-conditions/privacy-policy
*/

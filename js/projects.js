// var Projects = Projects || function (output_) {

//     output_.insertAdjacentHTML('beforeEnd', projectsHtmlString);
//     buttonify();

//     // ~~~~~ scrolling implementation ~~~~~
//     // var nav = document.getElementById('projects-card');
//     // var content = document.getElementById('projects-content')
//     // console.log(nav);
//     // console.log(content);
//     // nav.setAttribute("data_overflowing", determineOverflow(content, nav));

//     // var last_known_scroll_position = 0;
//     // var ticking = false;
    
//     // function doSomething(scroll_pos) {
//     //     nav.setAttribute("data_overflowing", determineOverflow(content, nav));
//     // }
    
//     // nav.addEventListener("scroll", function() {
//     //     last_known_scroll_position = window.scrollY;
//     //     if (!ticking) {
//     //         window.requestAnimationFrame(function() {
//     //             doSomething(last_known_scroll_position);
//     //             ticking = false;
//     //         });
//     //     }
//     //     ticking = true;
//     // });

//     // function determineOverflow(content, container) {
//     //     var containerMetrics = container.getBoundingClientRect();
//     //     var containerMetricsRight = Math.floor(containerMetrics.right);
//     //     var containerMetricsLeft = Math.floor(containerMetrics.left);
//     //     var contentMetrics = content.getBoundingClientRect();
//     //     var contentMetricsRight = Math.floor(contentMetrics.right);
//     //     var contentMetricsLeft = Math.floor(contentMetrics.left);
//     //     if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
//     //         return "both";
//     //     } else if (contentMetricsLeft < containerMetricsLeft) {
//     //         return "left";
//     //     } else if (contentMetricsRight > containerMetricsRight) {
//     //         return "right";
//     //     } else {
//     //         return "none";
//     //     }
//     // }
    
// }

// const projectsHtmlString =
//     `<div class="projects-card" id="projects-card">
//         <div class="row" id="projects-content">
//             <div class="col-sm-">
//                 <figure class="tile">
//                     <img src="assets/images/scribble.png" width="310" height="394" alt="scribbleit" />
//                     <div class="date"><span class="year">2019</span><span class="month">March</span></div>
//                     <figcaption>
//                         <h3>ScribbleIt                        </h3>
//                         <h6>Your Personal Coversational AI BOT</h6>
//                         <h6>Hack In the North </h6>
//                         <p>ScribbleIt help you to transcribe and summarize you daily meetings, classes or meetups.</p>
//                         <button class="tags">Bootstrap</button>
//                         <button class="tags">Flask</button>
//                         <button class="tags">Zulip API</button>
//                         <button class="tags">Slack API</button>
//                         <button class="tags">Microsoft Cognitive API</button>
//                     </figcaption>
//                     <a href="https://github.com/shikharvaish28/scribe/tree/ud-1" target="_blank"></a>
//                 </figure>
//                 <div class="github-button-div">
//                     <a class="github-button" href="https://github.com/shikharvaish28/scribe/tree/ud-1"
//                         data-size="large">ScribbleIT</a>
//                 </div>
//             </div>
            
//         </div>
//     </div>`;
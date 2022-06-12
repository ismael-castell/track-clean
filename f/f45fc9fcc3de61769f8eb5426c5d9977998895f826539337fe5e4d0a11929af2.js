(function ($) {
  "use strict";

  // added to support accessibility for screen reader users
  var clickedURL;

  // Check if URL is external function
  $.fn.isExternal = function(){};

  // Trapping user in modal for web accessibility
  function(){}

  // Check if modal is open
  function(){}

  // Basename function for JS
  function(){}

  // Get URL Paramenters
  var getUrlParameter = function(){};

  // Suppress modal link redirect in WP Customizer
  function modalCustomizer() {
    if (typeof wp.customize !== "undefined") {
      var body = $("body");
      body.off("click.preview");

      body.on(
        "click.preview",
        `a[href]:not(.${fromPHP.modalLinkClass})`,
        function(){}
      );
    }
  }

  // Document Ready
  $(function () {
    // Detect windows width function
    var $window = $(window),
      $document = $(document),
      scrollPos,
      currentURL = window.location.pathname,
      disablePopup = !!window.MSInputMethodContext && !!document.documentMode;

    // Show modal functionality
    function(){}

    // Close modal functionality
    function hideModal(currentURL) {
      var body = $("body");

      // handle scrolling
      if (body.hasClass("no-scroll")) {
        body.removeClass("no-scroll");
        $("html").removeClass("no-scroll");
        window.scroll(0, scrollPos);
      }

      // hide popup
      $(".modal-wrapper").removeClass("show").hide();
      $(".wp-post-modal").removeClass("show");
      $("#modal-content").empty();

      // return to previous tab location for screen reader users
      if (clickedURL) clickedURL.focus();

      // return original page url in address bar
      if (window.location.pathname !== currentURL) {
        history.replaceState("", "", currentURL);
      }
    }

    // close modal
    $document
      .keyup(function (e) {
        // close modal when pressing esc
        if (
          e.keyCode === 27 &&
          $(".modal-wrapper").hasClass("show") &&
          popupOpen()
        )
          hideModal(currentURL);
      })
      // when clicking anywhere on page
      .on("click", function (e) {
        if (popupOpen()) {
          const currentTargetIsLink =
            e.target instanceof HTMLAnchorElement ||
            e.target.parentNode.className.indexOf(fromPHP.modalLinkClass) >=
              0 ||
            (e.originalEvent.path &&
              e.originalEvent.path[1].className === fromPHP.modalLinkClass);

          if (!currentTargetIsLink) hideModal(currentURL);
        }
      })
      // Close modal when clicking on close button
      .on("click", ".close-modal", function(){})
      // when clicking inside of modal don't close
      .on("click", ".wp-post-modal, .modal-content", function (e) {
        e.stopPropagation();
      });

    // Initialize entire modal functionality
    function initModal() {
      // if the window is greater than breakpoint then show modal, otherwise go to linked page as normal
      if ($window.width() >= fromPHP.breakpoint) {
        var modalUrl = getUrlParameter(fromPHP.modalLinkClass);

        // if using URL parameter to open modal
        if (modalUrl) {
          // show loading animation if styling is turned on
          if (fromPHP.loader) {
            $("#modal-content").html(
              '<img class="loading" src="' +
                fromPHP.pluginUrl +
                '/images/loading.gif" />'
            );
          }

          $.get(modalUrl, function(){});

          // show modal
          $(".modal-wrapper").fadeIn("fast", showModal);
        }

        // When clicking a modal-link
        $("body").on("click", `.${fromPHP.modalLinkClass}`, function (e) {
          // Define variables
          var modalContent = $("#modal-content");
          var $this =
            $(this).attr("href") !== undefined
              ? $(this)
              : $(this).find("a").first();
          var postLink = $this.attr("href");
          var postSlug =
            postLink.lastIndexOf("/#") > -1
              ? basename(postLink.substring(0, postLink.lastIndexOf("/#"))) +
                basename(postLink)
              : basename(postLink);
          var postAnchor =
            postSlug.lastIndexOf("#") !== -1
              ? postSlug.substring(postSlug.lastIndexOf("#"))
              : false;
          var dataDivID = $this.attr("data-div")
            ? "#" + $this.attr("data-div")
            : fromPHP.containerID;
          var dataBuddypress = $this.attr("data-buddypress");
          var loader =
            '<img class="loading" src="' +
            fromPHP.pluginUrl +
            '/images/loading.gif" />';
          clickedURL = document.activeElement;

          // prevent link from being followed
          e.preventDefault();

          // display loading animation or in this case static content
          if (fromPHP.loader) {
            modalContent.html(loader);
          }

          // Load content from external
          if ($this.isExternal()) {
            // load external content using iframe method
            if ($(this).hasClass("iframe") || fromPHP.iframe) {
              var iframeCode =
                '<iframe src="' +
                $(this).attr("href") +
                '" width="100%"' +
                ' height="600px" frameborder="0"></iframe>';
              modalContent.html(iframeCode);
            }
            // load external content normally
            else {
              $.ajaxPrefilter(function(){});

              $.get(postLink, function(){});
            }
          }
          // Load content from internal page
          else {
            // when loading buddy press profile
            if (dataBuddypress) {
              modalContent.load(postLink + " #buddypress");
            }
            // load internal content using iframe method
            else if ($(this).hasClass("iframe")) {
              var iframeCode =
                '<iframe src="' +
                $(this).attr("href") +
                '" width="100%"' +
                ' height="600px" frameborder="0"></iframe>';
              modalContent.html(iframeCode);
            }
            // when loading any other type of content
            else {
              // use the rest method
              if (fromPHP.restMethod || $(this).hasClass("rest")) {
                $.get(
                  fromPHP.siteUrl +
                    "/wp-json/wp-post-modal/v1/any-post-type?slug=" +
                    postSlug,
                  function(){}
                );
              }
              // use the default method
              else {
                $.get(postLink, function(){});
              }
            }
          }

          // show modal
          $(".modal-wrapper").fadeIn("fast", function(){});
        });
      }
    }

    // Initiate modal if not IE11
    if (!disablePopup) initModal();
  });

  // Window load
  $(window).on("load", function(){}
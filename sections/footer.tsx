import Image from "next/image";
import Logo from "../assets/Logo.svg.png";
function Footer() {
  return (
    <section id="footer">
      <div className="flex justify-center justify-items-center ">
        <div>
          <Image
            width={50}
            height={50}
            className="inline-block"
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZGQzM1QiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzYgNzJjMTkuODgyIDAgMzYtMTYuMTE4IDM2LTM2UzU1Ljg4MiAwIDM2IDAgMCAxNi4xMTggMCAzNnMxNi4xMTggMzYgMzYgMzZ6TTI2IDE5YTMgMyAwIDAxMy0zaDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTIgMCA2LjI5LTQuODQgMTEuNDUtMTEgMTEuOTU5di02LjA0MkE2LjAwMiA2LjAwMiAwIDAwNDMgMjJIMzJ2MjVhMyAzIDAgMTEtNiAwVjE5em0zIDM0YTYgNiAwIDAwNi02VjI1aDhhMyAzIDAgMTEwIDZoLTJ2MTZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnMtMTItNS4zNzMtMTItMTJhMyAzIDAgMTE2IDAgNiA2IDAgMDA2IDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
            }
            alt="Logo"
          />{" "}
          <span>©2021 Pirasanthan Jesugeevegan</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;

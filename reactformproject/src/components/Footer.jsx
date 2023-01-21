/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
  return (
    <div>
      <footer className="flex justify-evenly fixed bottom-0 left-0 w-full bg-[#333333] text-[#FAFAFA] py-4 ">
        <p>
          © {new Date().getFullYear()} Copyright - Developed by{" "}
          <a
            target="_blank"
            className="text-white underline"
            href="https://github.com/codeDiaries-devTeam"
          >
            codeDiaries Team
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Footer
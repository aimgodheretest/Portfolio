import { useEffect, useState } from "react";

const terminalLines = [
  {
    command: "whoami",
    output: ["Full Stack Developer"],
  },
  {
    command: "cat status.txt",
    output: ["Open to Work · Mumbai, India"],
  },
  {
    command: "ls stack/",
    output: ["React · Node.js · Express · MySQL · MongoDB · JavaScript"],
  },
  {
    command: "cat focus.txt",
    output: ["Building clean, scalable web applications"],
  },
];

function TerminalCard() {
  const [currentLine, setCurrentLine] = useState(0);
  const [phase, setPhase] = useState("command");
  const [typedCommand, setTypedCommand] = useState("");
  const [typedOutput, setTypedOutput] = useState("");
  const [completedLines, setCompletedLines] = useState([]);

  const activeLine = terminalLines[currentLine];

  useEffect(() => {
    let timeout;

    /* TYPE COMMAND */
    if (phase === "command") {
      if (typedCommand.length < activeLine.command.length) {
        timeout = setTimeout(() => {
          setTypedCommand(activeLine.command.slice(0, typedCommand.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => {
          setPhase("output");
        }, 450);
      }
    } else if (phase === "output") {
      /* TYPE OUTPUT */
      const fullOutput = activeLine.output.join("\n");

      if (typedOutput.length < fullOutput.length) {
        timeout = setTimeout(() => {
          setTypedOutput(fullOutput.slice(0, typedOutput.length + 1));
        }, 32);
      } else {
        timeout = setTimeout(() => {
          setPhase("save");
        }, 1200);
      }
    } else if (phase === "save") {
      /* SAVE COMPLETED LINE */
      setCompletedLines((previous) => [
        ...previous,
        {
          command: activeLine.command,
          output: activeLine.output,
        },
      ]);

      setTypedCommand("");
      setTypedOutput("");

      if (currentLine === terminalLines.length - 1) {
        setPhase("restart");
      } else {
        setCurrentLine((previous) => previous + 1);
        setPhase("command");
      }
    } else if (phase === "restart") {
      /* RESTART */
      timeout = setTimeout(() => {
        setCompletedLines([]);
        setCurrentLine(0);
        setTypedCommand("");
        setTypedOutput("");
        setPhase("command");
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [phase, typedCommand, typedOutput, currentLine, activeLine]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#29313c] bg-[#12171e] shadow-2xl shadow-black/20">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-[#29313c] bg-[#171d25] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

        <span className="ml-3 font-mono text-[11px] text-slate-600">
          murli@portfolio — zsh
        </span>
      </div>

      {/* Terminal Body */}
      <div className="min-h-95 p-6 font-mono text-sm">
        {/* Completed Commands */}
        <div className="space-y-5">
          {completedLines.map((line, index) => (
            <div key={`${line.command}-${index}`}>
              <p className="text-blue-400">
                <span className="mr-2">→</span>~ {line.command}
              </p>

              <div className="mt-1 whitespace-nowrap pl-5 leading-6 text-slate-300">
                {line.output.join(" · ")}
              </div>
            </div>
          ))}
        </div>

        {/* Current Command */}
        <div className="mt-5">
          <p className="text-blue-400">
            <span className="mr-2">→</span>~ {typedCommand}
            <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-blue-400 align-middle" />
          </p>

          {/* Current Output */}
          {typedOutput && (
            <div className="mt-1 whitespace-nowrap pl-5 leading-6 text-slate-300">
              {typedOutput}
            </div>
          )}
        </div>

        {/* Terminal Status */}
        <div className="mt-8 border-t border-[#252d38] pt-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
              terminal session
            </p>

            <span className="flex items-center gap-2 font-mono text-[10px] text-slate-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              online
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Running portfolio.sh
            <span className="ml-1 animate-pulse text-blue-400">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TerminalCard;

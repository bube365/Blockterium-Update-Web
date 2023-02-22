import { Menu, Switch } from "@headlessui/react";

const SwitchComp = ({ mode, setMode }) => {
  return (
    <>
      <Switch
        checked={mode}
        onChange={setMode}
        className={`${
          mode ? "bg-mainBlue" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center mx-2 rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            mode ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
};

export default SwitchComp;

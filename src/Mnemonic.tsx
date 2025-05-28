import { useAppOwner } from "@evolu/react";
import { Mnemonic as EvoluMnemonic } from "@evolu/common";
import { evolu } from "./evolu.ts";
import { type ChangeEvent, useState } from "react";

export const Mnemonic = () => {
  const owner = useAppOwner();
  const [mnemonic, setMnemonic] = useState<EvoluMnemonic | null>(
    owner?.mnemonic ?? null,
  );

  const restoreData = () => {
    if (mnemonic !== null) {
      evolu.restoreAppOwner(mnemonic);
    }
  };

  const deleteLocalData = () => {
    evolu.resetAppOwner();
  };

  const onMnemonicChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const m = EvoluMnemonic.from(e.target.value);

    if (m.ok) {
      setMnemonic(m.value);
    }
  };

  return (
    <div>
      <textarea rows={5} cols={60} onChange={onMnemonicChange}>
        {owner?.mnemonic}
      </textarea>
      <br />
      <button onClick={restoreData}>restore data</button>
      <button onClick={deleteLocalData}>❌ delete local data</button>
    </div>
  );
};

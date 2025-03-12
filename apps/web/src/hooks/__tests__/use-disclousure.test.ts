import { describe, expect, it } from "vitest";
import { useDisclosure } from "../use-disclosure";
import { act, renderHook } from "@testing-library/react";

describe(useDisclosure, () => {
  it("openが実行した時,isOpenはtrueになる", () => {
    const { result } = renderHook(useDisclosure);

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it("closeが実行した時,isOpenはfalseになる", () => {
    const { result } = renderHook(useDisclosure);

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });
});

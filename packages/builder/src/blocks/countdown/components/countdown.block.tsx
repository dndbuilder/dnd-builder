"use client";

import { BlockProps } from "@/types/block";
import { getLocaleTag } from "@/utils";
import { FC, useEffect, useState } from "react";
import { CountdownSettingsType } from "../types";

const Countdown: FC<BlockProps<CountdownSettingsType>> = ({
  settings,
  isEditable,
  meta: { locale },
}) => {
  const localeTag = getLocaleTag(locale);

  const [timeRemaining, setTimeRemaining] = useState(() => {
    return calculateRemainingTime();
  });

  function calculateRemainingTime(interval?: NodeJS.Timeout) {
    const currentTime = new Date().getTime();
    const eventTime = new Date(settings.dueDate).getTime();
    let remainingTime = eventTime - currentTime;

    if (remainingTime <= 0) {
      remainingTime = 0;
      if (interval) clearInterval(interval);
    }

    return remainingTime;
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remainingTime = calculateRemainingTime(countdownInterval);
      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [settings.dueDate]);

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  function ableToDisplay() {
    if (isEditable) return true;

    if (timeRemaining <= 0) {
      return false;
    }

    return true;
  }

  return (
    <div className="countdown-block">
      {/* Countdown Display */}
      {ableToDisplay() && (
        <div className="countdown-display">
          <div className="countdown-item">
            <span className="countdown-digits text-6xl">
              {days.toLocaleString(localeTag).padStart(2, "0")}
            </span>
            {settings.showLabels && settings.labels.days.show && (
              <span className="countdown-label text-2xl">
                {settings.labels.days.value?.[locale] ||
                  settings.labels?.days?.value?.en}
              </span>
            )}
          </div>
          <div className="countdown-item">
            <span className="countdown-digits text-6xl">
              {hours.toLocaleString(localeTag).padStart(2, "0")}
            </span>
            {settings.showLabels && settings.labels.hours.show && (
              <span className="countdown-label text-2xl">
                {settings.labels.hours.value?.[locale] ||
                  settings.labels?.hours?.value?.en}
              </span>
            )}
          </div>
          <div className="countdown-item">
            <span className="countdown-digits text-6xl">
              {minutes.toLocaleString(localeTag).padStart(2, "0")}
            </span>
            {settings.showLabels && settings.labels.minutes.show && (
              <span className="countdown-label text-2xl">
                {settings.labels.minutes.value?.[locale] ||
                  settings.labels?.minutes?.value?.en}
              </span>
            )}
          </div>
          <div className="countdown-item">
            <span className="countdown-digits text-6xl">
              {seconds.toLocaleString(localeTag).padStart(2, "0")}
            </span>
            {settings.showLabels && settings.labels.seconds.show && (
              <span className="countdown-label text-2xl">
                {settings.labels.seconds.value?.[locale] ||
                  settings.labels?.seconds?.value?.en}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Message */}
      {timeRemaining <= 0 && settings.expireMessage && (
        <div className="expire-message text-2xl">
          {settings.expireMessage?.[locale] || settings.expireMessage?.en}
        </div>
      )}
    </div>
  );
};

export default Countdown;

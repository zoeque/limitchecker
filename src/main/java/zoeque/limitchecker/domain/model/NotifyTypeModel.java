package zoeque.limitchecker.domain.model;

public enum NotifyTypeModel {
  WARN("warn"),
  ALERT("alert");

  String mailType;

  NotifyTypeModel(String mailType) {
    this.mailType = mailType;
  }

  public String getMailType() {
    return this.mailType;
  }
}

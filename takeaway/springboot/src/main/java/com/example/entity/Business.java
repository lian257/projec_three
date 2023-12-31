package com.example.entity;

import java.io.Serializable;

/**
 * 商家表
*/
public class Business extends Account implements Serializable {
    private static final long serialVersionUID = 1L;

    /** 序号 */
    private Integer id;
    /** 账号 */
    private String username;
    /** 密码 */
    private String password;
    /** 名称 */
    private String name;
    /** logo */
    private String avatar;
    /** 角色 */
    private String role;
    /** 电话 */
    private String phone;
    /** 简介 */
    private String info;
    /** 地址 */
    private String address;
    /** 营业执照 */
    private String license;
    /** 审核状态 */
    private String status;
    /** 营业时间 */
    private String timeRange;
    /** 类型 */
    private String type;
    /** 当前登录用户是否收藏 */
    private Boolean isCollect;

    private Double star;

    private Integer saleCount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTimeRange() {
        return timeRange;
    }

    public void setTimeRange(String timeRange) {
        this.timeRange = timeRange;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getIsCollect() {
        return isCollect;
    }

    public void setIsCollect(Boolean isCollect) {
        this.isCollect = isCollect;
    }

    public Double getStar() {
        return star;
    }

    public void setStar(Double star) {
        this.star = star;
    }

    public Integer getSaleCount() {
        return saleCount;
    }

    public void setSaleCount(Integer saleCount) {
        this.saleCount = saleCount;
    }
}